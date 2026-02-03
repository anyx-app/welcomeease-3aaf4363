SET search_path TO proj_8ac7c4f2;

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles Table (Hosts)
-- Stores profile information for registered users (Hosts).
-- Linked to auth.users via user_id (manual link, no FK to preserve schema isolation).
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL, 
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast lookups by auth user id
CREATE INDEX idx_profiles_user_id ON profiles(user_id);

-- RLS for Profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON profiles
    FOR SELECT
    USING (user_id::text = current_setting('request.jwt.claims', true)::json->>'sub');

CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE
    USING (user_id::text = current_setting('request.jwt.claims', true)::json->>'sub');

CREATE POLICY "Users can insert own profile" ON profiles
    FOR INSERT
    WITH CHECK (user_id::text = current_setting('request.jwt.claims', true)::json->>'sub');

-- Properties Table
-- Represents a rental unit managed by a host.
CREATE TABLE properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    host_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    address TEXT,
    cover_image_url TEXT,
    check_in_time TIME,
    check_out_time TIME,
    wifi_ssid TEXT,
    wifi_password TEXT,
    access_instructions TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS for Properties
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Hosts can manage own properties" ON properties
    USING (host_id IN (SELECT id FROM profiles WHERE user_id::text = current_setting('request.jwt.claims', true)::json->>'sub'));

-- Bookings Table
-- Connects a guest to a property for a specific duration.
-- 'access_code' is the unique key for guests to login to the guide.
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE NOT NULL,
    guest_name TEXT NOT NULL,
    guest_email TEXT,
    access_code TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    door_code TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(property_id, access_code)
);

CREATE INDEX idx_bookings_access_code ON bookings(access_code);
CREATE INDEX idx_bookings_property_id ON bookings(property_id);

-- RLS for Bookings
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Hosts can manage bookings for their properties" ON bookings
    USING (property_id IN (SELECT id FROM properties WHERE host_id IN (SELECT id FROM profiles WHERE user_id::text = current_setting('request.jwt.claims', true)::json->>'sub')));

-- Guide Sections Table
-- Modular content for the welcome guide (House Rules, Tips, etc).
CREATE TABLE guide_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    category TEXT NOT NULL CHECK (category IN ('rule', 'recommendation', 'emergency', 'instruction', 'wifi', 'other')),
    icon TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_guide_sections_property_id ON guide_sections(property_id);

-- RLS for Guide Sections
ALTER TABLE guide_sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Hosts can manage guide sections" ON guide_sections
    USING (property_id IN (SELECT id FROM properties WHERE host_id IN (SELECT id FROM profiles WHERE user_id::text = current_setting('request.jwt.claims', true)::json->>'sub')));

-- Grant permissions (if needed for the default role, usually handled by Supabase but good to be explicit for the schema owner)
GRANT ALL ON ALL TABLES IN SCHEMA proj_8ac7c4f2 TO postgres;
GRANT ALL ON ALL TABLES IN SCHEMA proj_8ac7c4f2 TO service_role;
GRANT ALL ON ALL TABLES IN SCHEMA proj_8ac7c4f2 TO authenticated;
