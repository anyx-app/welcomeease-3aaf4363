# Schema Plan - WelcomeEase

## Overview
WelcomeEase requires a schema that supports property management, guest access, and information guides. The core entities are Properties, Bookings (Guest Access), and various Guide Sections (Rules, WiFi, Recommendations, Contacts).

## Tables

### 1. `profiles`
- **Description**: Extends `auth.users` for hosts. Guests might be transient and not need full profiles initially, but this table will primarily serve property owners/hosts.
- **Columns**:
  - `id` (uuid, PK) -> references `auth.users.id`
  - `full_name` (text)
  - `avatar_url` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
- **RLS**: 
  - Users can read/update their own profile.

### 2. `properties`
- **Description**: Represents a rental unit managed by a host.
- **Columns**:
  - `id` (uuid, PK)
  - `host_id` (uuid, FK) -> references `profiles.id`
  - `name` (text)
  - `address` (text)
  - `cover_image_url` (text)
  - `check_in_time` (time)
  - `check_out_time` (time)
  - `wifi_ssid` (text)
  - `wifi_password` (text)
  - `access_instructions` (text) - General access info (e.g. "Key is under mat")
  - `created_at` (timestamptz)
- **RLS**: 
  - Hosts can CRUD their own properties.
  - Guests with a valid booking can read specific fields.

### 3. `bookings`
- **Description**: Connects a guest to a property for a specific duration. This controls access to the "Welcome Guide".
- **Columns**:
  - `id` (uuid, PK)
  - `property_id` (uuid, FK) -> references `properties.id`
  - `guest_name` (text)
  - `guest_email` (text)
  - `access_code` (text, unique per property/active) - The unique code the guest uses to "login" to the guide.
  - `start_date` (date)
  - `end_date` (date)
  - `door_code` (text) - Specific door code for this booking.
  - `created_at` (timestamptz)
- **RLS**:
  - Hosts can CRUD bookings for their properties.
  - Guests can read their own booking (via access_code lookup function).

### 4. `guide_sections`
- **Description**: Stores modular content for the welcome guide (House Rules, Local Tips, Emergency Contacts).
- **Columns**:
  - `id` (uuid, PK)
  - `property_id` (uuid, FK) -> references `properties.id`
  - `title` (text)
  - `content` (text)
  - `category` (text) - e.g., 'rule', 'recommendation', 'emergency', 'instruction'
  - `icon` (text) - Name of icon to display
  - `sort_order` (int)
  - `created_at` (timestamptz)
- **RLS**:
  - Hosts can CRUD sections for their properties.
  - Guests with valid booking can read.

## Relationships
- `profiles` (1) -> (Many) `properties`
- `properties` (1) -> (Many) `bookings`
- `properties` (1) -> (Many) `guide_sections`

## Security Policies (RLS Strategy)
1. **Host Access**: Based on `auth.uid() = properties.host_id`.
2. **Guest Access**: Since guests might not have `auth` accounts, access will likely be handled via a "Guest Session" or a public RPC function that validates the `access_code` and returns a session token or data. Alternatively, RLS can be open for `select` if filters match a verified booking ID stored in local storage/cookies, but a secure RPC function `get_guest_guide(access_code)` is safer to prevent scraping.
