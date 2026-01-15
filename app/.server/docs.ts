import { marked } from 'marked';

export interface DocPage {
  title: string;
  description: string;
  content: string;
}

const markdownDocs = {
  welcome: {
    title: 'Getting Started with Tickflo',
    description: 'Quick start guide for Tickflo',
    markdown: `# Welcome to Tickflo

Tickflo is a modern, multi-tenant help desk and ticketing system designed for teams that need isolated workspaces, flexible permissions, and real-time collaboration.

## Features

- **🏢 Multi-Tenant Workspaces** - Complete data isolation with separate workspace environments
- **🎫 Ticket Management** - Full-featured ticketing with priorities, statuses, types, and assignments
- **👥 Team Collaboration** - Real-time updates via SignalR for instant notifications
- **🔐 Role-Based Access Control** - Customizable permissions and roles for fine-grained security
- **📧 Smart Notifications** - Email and in-app notification system
- **📎 File Attachments** - S3-compatible storage powered by RustFS
- **🎨 Modern UI** - Beautiful, responsive interface built with Tailwind CSS and DaisyUI
- **📊 Contact & Location Tracking** - Manage contacts, locations, and service inventory

## Quick Start

### Prerequisites

- [.NET 10.0 SDK](https://dotnet.microsoft.com/download)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [dbmate](https://github.com/amacneil/dbmate#installation)

### Installation

The fastest way to get started is with Docker:

\`\`\`bash
git clone https://github.com/tickflo/tickflo.git
cd tickflo
docker compose up -d
dbmate up
\`\`\`

Then visit \`http://localhost:3000\` and create your first workspace.

## Architecture Overview

Tickflo is built with modern, scalable technologies:

- **Backend**: ASP.NET Core 10.0 with Entity Framework Core
- **Database**: PostgreSQL 18.1
- **Frontend**: React with TypeScript
- **Real-time**: SignalR for instant updates
- **File Storage**: S3-compatible storage (RustFS)
- **Styling**: Tailwind CSS + DaisyUI

## What's Next?

- Read the [Overview](/docs/overview) to understand core concepts
- Follow the [Installation Guide](/docs/installation-deployment) for production setup
- Explore [Ticket Workflows](/docs/ticket-workflows) to learn ticket management
- Check out [API Documentation](/docs/api-documentation) for integrations
`,
  },

  overview: {
    title: 'Overview',
    description: 'Comprehensive overview of Tickflo features and capabilities',
    markdown: `# Tickflo Overview

Tickflo is a complete help desk and ticketing solution that provides everything teams need to manage support requests, track issues, and collaborate effectively.

## Core Concepts

### Workspaces

Workspaces are the top-level organizational unit in Tickflo. Each workspace is completely isolated with its own:
- Users and teams
- Tickets and contacts
- Locations and inventory
- Settings and configurations
- Custom fields and workflows

### Tickets

Tickets represent support requests, issues, or tasks. Each ticket includes:
- Subject and description
- Status (open, in-progress, resolved, closed, etc.)
- Priority (low, normal, high, critical)
- Type (bug, support, feature request, etc.)
- Assignment to users or teams
- Comments and attachments
- Complete audit trail

### Contacts

Contacts represent customers, clients, or external stakeholders. Features include:
- Contact information (name, email, phone)
- Organization and location assignment
- Portal access for client self-service
- Communication history
- Custom fields

## Main Application Areas

### Dashboard

The dashboard provides at-a-glance insights into your support operations with key metrics and real-time updates.

### Tickets Management

Full ticket lifecycle management from creation to resolution.

### Contact Management

Organize and manage customer information centrally.

### Inventory Tracking

Manage parts, equipment, and assets with allocation tracking.

### Client Portal

Self-service portal for customers to submit and track tickets.

## Key Features

### Real-Time Collaboration

SignalR integration enables instant notifications and live updates.

### Smart Notifications

Stay informed about important events via email and in-app notifications.

### File Attachments

Secure file handling with S3-compatible storage.

### Search and Filtering

Powerful search capabilities with advanced filtering options.

### Automation

Automate routine tasks with workflow automation and API integrations.

### API & Integrations

Connect with your other tools through REST API, webhooks, and pre-built integrations.

## Technology Stack

- **Backend**: ASP.NET Core 10.0
- **Database**: PostgreSQL 18.1
- **ORM**: Entity Framework Core 9.0
- **Real-time**: SignalR
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, DaisyUI
- **File Storage**: S3-compatible (RustFS)
`,
  },

  'workspace-management': {
    title: 'Workspace Management',
    description:
      'Create, organize, and secure workspaces for teams and clients.',
    markdown: `# Workspace Management

Workspaces keep data isolated by customer, team, or environment. Each workspace has its own users, tickets, contacts, inventory, settings, and audit trail.

## When to create a new workspace

- Separate customers or business units
- Sandbox vs. production environments
- Isolating sensitive teams (e.g., VIP support, internal IT)

## Create a workspace

1) Open **Settings → Workspaces**
2) Click **New workspace**
3) Provide **Name**, optional **Slug**, and **Timezone**
4) Pick defaults:
   - **Ticket prefixes** (e.g., *SUP*, *IT*)
   - **Default priority/status**
   - **Email reply-to** (per workspace)
5) Save to provision the workspace

## Invite users

1) Go to **Settings → Users** inside the workspace
2) Click **Invite user**
3) Choose a **Role** (see defaults below) and send the invite

### Default roles

- **Admin** — full control: settings, users, billing, integrations
- **Manager** — manage tickets, teams, reports; limited settings
- **Agent** — work tickets, view contacts and locations
- **Viewer** — read-only access to tickets and dashboards

Use custom roles for fine-grained permissions (e.g., allow inventory but not billing).

## Switch workspaces

- Use the workspace switcher in the global nav (top-right)
- Keyboard: press **Ctrl/Cmd + K** then type the workspace name

## Configure per-workspace settings

- **Ticket settings:** statuses, priorities, SLA targets, templates
- **Notifications:** email channels, in-app rules, escalation timers
- **Contacts & Locations:** required fields, custom properties, region/timezone defaults
- **Integrations:** webhooks, API keys, and app-specific tokens

## Common operating patterns

- **Sandbox → Production:** mirror configs, test automations in sandbox first
- **Client-by-client:** one workspace per customer; invite only that customer’s users
- **Team-by-team:** internal IT vs. customer success vs. field ops, each isolated

## Clean-up and audits

- Deactivate users instead of deleting to preserve audit trails
- Review **Settings → Audit log** before major changes
- Rotate API keys every 90 days (per workspace)

## API quick start (workspace-scoped)

Authenticate with a workspace API key and include the workspace slug in requests:

\`\`\`http
POST /api/{workspaceSlug}/tickets
Authorization: Bearer YOUR_WORKSPACE_API_KEY
Content-Type: application/json
\`\`\`

`,
  },

  'team-management': {
    title: 'Team Management',
    description:
      'Organize agents into teams, assign ownership, and control scope.',
    markdown: `# Team Management

Teams group agents so you can assign ownership, route tickets, and scope permissions.

## Create a team

1) Go to **Settings → Teams**
2) Click **New team**
3) Add **Name**, optional **Description**, and a **Default queue** (if used)
4) Add members and set a **Team lead** (for escalations and reports)
5) Save

## Add members

- From the team page, click **Add members**, search by user, and set **Role** inside the team (Lead/Member)
- Team roles don’t override global roles; they scope visibility and routing defaults

## Routing patterns

- **Round-robin by team:** auto-assign new tickets to available team members
- **Team queues:** route by queue (e.g., *Billing*, *Onsite*, *VIP*) and set SLA targets per queue
- **Escalations:** auto-escalate to the team lead after X minutes or on status = *stalled*

## Permissions tips

- Combine with workspace roles for least privilege
- Use custom roles to allow a team to manage tickets but not workspace settings

## Dashboards & reports

- Filter dashboards by team to track volume, SLA, and backlog
- Export team performance for weekly reviews

## API quick start (team-scoped)

List teams in a workspace:

\`\`\`http
GET /api/{workspaceSlug}/teams
Authorization: Bearer YOUR_WORKSPACE_API_KEY
\`\`\`

Assign a ticket to a team:

\`\`\`http
PATCH /api/{workspaceSlug}/tickets/{ticketId}
Authorization: Bearer YOUR_WORKSPACE_API_KEY
Content-Type: application/json

{
  "teamId": "<team-id>"
}
\`\`\`
`,
  },

  'contact-management': {
    title: 'Contact Management',
    description:
      'Manage customers, link them to organizations and locations, and control portal access.',
    markdown: `# Contact Management

Contacts represent customers or stakeholders. Link them to organizations and locations, and optionally grant portal access.

## Create a contact

1) Go to **Contacts** and click **New contact**
2) Add **Name**, **Email**, **Phone**, and optionally **Organization** + **Location**
3) Set **Time zone** and preferred **Language** (for notifications)
4) Save

## Link to organizations and locations

- Pick an existing organization or create one inline
- Attach a location for dispatch/onsite work; you can set multiple locations per organization

## Custom fields

- Configure required fields in **Settings → Contacts** (e.g., Contract ID, Tier, Region)
- Use dropdowns for consistent data; use text for ad-hoc metadata

## Portal access

1) Open the contact
2) Toggle **Portal access** and send invite
3) Choose permissions: submit tickets, view own tickets, view organization tickets

## Ticket context

- When creating a ticket, select the contact; the organization and default location prefill
- SLA, entitlements, and routing can be driven by the contact’s organization/tier

## Data hygiene

- Merge duplicates from the contact menu
- Deactivate instead of deleting to preserve audit history
- Use views/filters for tiering (e.g., VIP, Standard)

## API quick start (contact scoped)

Create a contact:

\`\`\`http
POST /api/{workspaceSlug}/contacts
Authorization: Bearer YOUR_WORKSPACE_API_KEY
Content-Type: application/json

{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "organizationId": "<org-id>",
  "locationId": "<location-id>"
}
\`\`\`

List contacts with filters:

\`\`\`http
GET /api/{workspaceSlug}/contacts?organizationId=<org-id>&tier=vip
Authorization: Bearer YOUR_WORKSPACE_API_KEY
\`\`\`
`,
  },

  'installation-deployment': {
    title: 'Installation & Deployment',
    description: 'Complete guide to installing and deploying Tickflo',
    markdown: `# Installation & Deployment

## System Requirements

### Hardware Requirements

**Minimum:**
- 2 CPU cores
- 4 GB RAM
- 20 GB disk space

**Recommended:**
- 4+ CPU cores
- 8+ GB RAM
- 50+ GB SSD storage

### Software Requirements

**Required:**
- .NET 10.0 SDK or Runtime
- PostgreSQL 18.1+
- Docker & Docker Compose

### Operating System

Supported Platforms:
- Linux (Ubuntu 22.04+, Debian 11+, RHEL 8+)
- Windows Server 2019+
- macOS (development only)
- Docker (any platform)

## Docker Compose Installation

**Quick Start:**

\`\`\`bash
git clone https://github.com/tickflo/tickflo.git
cd tickflo
docker compose up -d
dbmate up
\`\`\`

Then visit \`http://localhost:3000\`

## Production Deployment

### Using Nginx as Reverse Proxy

**1. Build Application:**
\`\`\`bash
dotnet publish -c Release -o /var/www/tickflo
\`\`\`

**2. Create Systemd Service:**

Create \`/etc/systemd/system/tickflo.service\`:

\`\`\`ini
[Unit]
Description=Tickflo Application
After=network.target postgresql.service

[Service]
Type=notify
User=www-data
WorkingDirectory=/var/www/tickflo
ExecStart=/usr/bin/dotnet /var/www/tickflo/Tickflo.dll
Restart=always
RestartSec=10
SyslogIdentifier=tickflo
Environment=ASPNETCORE_ENVIRONMENT=Production

[Install]
WantedBy=multi-user.target
\`\`\`

**3. Enable and Start:**
\`\`\`bash
sudo systemctl enable tickflo
sudo systemctl start tickflo
\`\`\`

### SSL/TLS Configuration

**Using Let's Encrypt:**
\`\`\`bash
sudo certbot --nginx -d tickflo.example.com
sudo certbot renew --dry-run
\`\`\`

## Configuration

### Environment Variables

**Required:**
\`\`\`bash
DATABASE_URL=postgresql://user:pass@localhost:5432/tickflo
RUSTFS_ENDPOINT=http://localhost:9000
RUSTFS_ACCESS_KEY=minioadmin
RUSTFS_SECRET_KEY=minioadmin
RUSTFS_BUCKET=tickflo
\`\`\`

### Database Setup

Create PostgreSQL database:

\`\`\`bash
createdb tickflo
\`\`\`

Run migrations:

\`\`\`bash
dbmate up
\`\`\`

## Backup & Recovery

### Database Backup

\`\`\`bash
pg_dump -U tickflo tickflo | gzip > backup.sql.gz
\`\`\`

### Restore Database

\`\`\`bash
gunzip < backup.sql.gz | psql -U tickflo tickflo
\`\`\`

## Troubleshooting

### Database Connection Errors

Check PostgreSQL is running:
\`\`\`bash
sudo systemctl status postgresql
\`\`\`

Verify connection string:
\`\`\`bash
psql -h localhost -U tickflo -d tickflo
\`\`\`

### Application Won't Start

Check logs:
\`\`\`bash
sudo journalctl -u tickflo -n 50
\`\`\`

Check port availability:
\`\`\`bash
sudo netstat -tlnp | grep 5000
\`\`\`
`,
  },

  'ticket-workflows': {
    title: 'Ticket Workflows',
    description: 'Complete guide to managing the ticket lifecycle',
    markdown: `# Ticket Workflows

## Creating Tickets

### Via Web Interface

1. Click "New Ticket" button
2. Enter subject (required)
3. Enter description
4. Select ticket type
5. Set priority
6. Assign to user or team (optional)
7. Select contact
8. Click "Create"

### Via Client Portal

Customers can create tickets through the client portal without login.

### Via Email

Configure email-to-ticket to create tickets from customer emails.

### Via API

\`\`\`bash
curl -X POST https://tickflo.example.com/api/v1/workspaces/acme/tickets \\
  -H "Authorization: Bearer API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "subject": "New issue",
    "description": "Issue description",
    "priority": "high",
    "type": "bug"
  }'
\`\`\`

## Ticket Properties

### Subject
- Brief title (required)
- Searchable in lists
- Up to 200 characters recommended

### Description
- Detailed explanation
- Supports markdown formatting
- Can include links and code blocks

### Type
- Bug
- Feature Request
- Support
- Question
- Incident
- Custom types

### Priority
- Low - Non-urgent issues
- Normal - Standard support
- High - Important issues
- Critical - Urgent/blocking

### Status
- Open - New or unresolved
- In Progress - Being worked on
- On Hold - Waiting for information
- Resolved - Solution provided
- Closed - Ticket complete

## Ticket Management

### Editing Tickets

1. Open ticket
2. Click "Edit"
3. Modify fields
4. Click "Save"

### Comments

Add comments to collaborate:
- Internal comments (team only)
- Public comments (visible to customer)
- Mention users with @username
- Add attachments to comments

### Attachments

Attach files to tickets:
- Supports all file types
- Secure cloud storage
- Automatic cleanup
- Track file history

### Inventory Allocation

Allocate inventory items to tickets:
1. Open ticket
2. Click "Allocate Inventory"
3. Select item and quantity
4. Confirm allocation

## Status Transitions

### Typical Workflow

1. **Open** - Ticket created
2. **In Progress** - Assigned and being worked
3. **Resolved** - Solution provided
4. **Closed** - Confirmed complete

### Reopening Tickets

If customer reports issue not resolved:
1. Change status to "Open"
2. Add comment explaining reopening
3. Reassign if needed

## Advanced Features

### Linking Related Tickets

Link tickets to show relationships between issues.

### SLA Tracking

Monitor Service Level Agreement compliance with visual indicators.

### Search and Filtering

Find tickets quickly with full-text search and advanced filtering.

### Bulk Operations

Perform actions on multiple tickets at once.

### Ticket History

View complete history of all changes to a ticket.

## Best Practices

### Clear Communication

- Use specific and descriptive subjects
- Provide detailed descriptions
- Include error messages and screenshots
- Comment regularly on progress

### Timely Updates

- Comment regularly on progress
- Set realistic expectations
- Keep customer informed
- Close resolved tickets promptly
`,
  },

  'users-permissions': {
    title: 'Users & Permissions',
    description: 'User management and role-based access control guide',
    markdown: `# Users & Permissions

## User Accounts

### Creating Users

Users can be created by administrators:

1. Settings → Members
2. Click "Add Member"
3. Enter email address
4. Select role
5. Click "Invite"

### User Types

**System Administrators**
- Manage all workspaces
- Create workspaces
- Manage system users

**Workspace Members**
- Assigned to specific workspaces
- Have role-based permissions
- Limited to assigned workspace

## Roles & Permissions

### Default Roles

**Administrator** - Full access to workspace
**Manager** - Manage team members and view reports
**Agent** - Create and edit tickets
**Viewer** - Read-only access
**Member** - Basic access with limited permissions

### Custom Roles

Create roles tailored to your needs:

1. Settings → Roles
2. Click "New Role"
3. Name the role
4. Select permissions
5. Set ticket scope
6. Save

### Permission Scopes

**All Tickets** - Access to all workspace tickets
**Team Tickets** - Access only to team's tickets
**Assigned Tickets** - Access only to personally assigned tickets

## Team Management

### Creating Teams

1. Settings → Teams
2. Click "New Team"
3. Enter team name
4. Add description
5. Click "Create"

### Adding Team Members

1. Open team
2. Click "Add Member"
3. Select user
4. Choose team role (Lead or Member)
5. Save

## Security Best Practices

### Principle of Least Privilege

Grant minimum necessary permissions:
- Don't make everyone administrators
- Use custom roles for specific needs
- Review permissions regularly

### Regular Audits

Monthly audit tasks:
- Review user permissions
- Check for unused accounts
- Verify role appropriateness
- Update team assignments

### Documentation

Maintain records of:
- Role descriptions
- Permission lists
- Access levels
- Team structure
`,
  },

  'dashboard-reports': {
    title: 'Dashboard & Reports',
    description: 'Analytics, metrics, and reporting guide',
    markdown: `# Dashboard & Reports

## Dashboard Overview

The dashboard provides real-time insights into your support operations.

## Key Metrics

### Ticket Statistics

**Open Tickets**
- Total count
- By priority
- By status
- By team

**Response Metrics**
- Average response time
- Average resolution time
- First response time

### Team Performance

**Workload Distribution**
- Tickets per team member
- Open tickets per user
- Queue depth

**Performance Indicators**
- Tickets closed today
- Average resolution time
- SLA compliance

## Filtering

Filter dashboard data by:
- Date range (Today, Week, Month, Custom)
- Team or team member
- Priority level
- Status

## Reports

### Report Types

**Ticket Reports**
- Ticket summary
- Tickets by status
- Tickets by priority
- Unresolved tickets
- Team reports

**Customer Reports**
- Contact tickets
- Customer satisfaction
- Top customers

**SLA Reports**
- SLA compliance
- Breach analysis
- Response time metrics

### Generating Reports

1. Click "Reports" tab
2. Choose report type
3. Configure parameters
4. Generate report

### Exporting Reports

Export in multiple formats:
- PDF (formatted report)
- CSV (spreadsheet)
- Excel (with formatting)
- JSON (raw data)

### Scheduling Reports

Create automated recurring reports:

1. Reports → Scheduled
2. Click "New Scheduled Report"
3. Choose report type
4. Set frequency (Daily, Weekly, Monthly)
5. Select recipients
6. Save

Reports are automatically emailed to recipients.

## SLA Metrics

Monitor Service Level Agreement performance:

**Metrics Tracked:**
- First response time
- Resolution time
- Breach percentage
- Average compliance

## Best Practices

### Regular Monitoring

**Daily:** Check open ticket count, review unassigned tickets
**Weekly:** Team performance trends, customer satisfaction
**Monthly:** Generate reports, analyze trends, plan improvements

### Data-Driven Decisions

Use reports to:
- Identify improvement areas
- Allocate resources
- Plan hiring
- Measure performance
`,
  },

  'client-portal': {
    title: 'Client Portal',
    description: 'Customer-facing portal for ticket submission and tracking',
    markdown: `# Client Portal

## Portal Overview

The client portal allows customers to:
- Submit support tickets
- Track ticket status
- View ticket details
- Add comments and attachments
- Self-serve problem resolution

No login required - customers access via secure token-based authentication.

## Portal Setup

### Enabling Portal

1. Settings → Features
2. Find "Client Portal"
3. Toggle "Enabled"
4. Save settings

### Creating Contact

1. Contacts → New Contact
2. Enter contact information
3. Click "Generate Portal Token"
4. Token is created automatically

### Sharing Portal Access

**Generate Portal Link:**
1. Open contact
2. Click "Portal Settings"
3. Click "Generate Portal Token"
4. Copy portal URL
5. Share with customer

**Portal URL Format:**
\`https://tickflo.example.com/portal/{token}\`

## Portal Interface

### Customer Dashboard

Shows:
- Recent tickets
- Open tickets count
- Pending items

### Creating Ticket

**Customer Process:**
1. Click "Submit Ticket"
2. Enter subject
3. Enter description
4. Attach files (optional)
5. Click "Submit"

### Viewing Tickets

**Customer View:**
- Ticket subject and status
- Priority level
- Ticket number
- Creation and update dates
- Comments and attachments

### Adding Comments

1. Open ticket
2. Click "Add Comment"
3. Type comment
4. Attach files (optional)
5. Click "Post"

## Portal Customization

### Branding

Customize portal appearance:
- Logo
- Colors
- Email templates
- Welcome message

### Portal Features

Enable/disable features:
- Allow new tickets
- Allow attachments
- Allow comments
- Show FAQ

## Security

### Token-Based Authentication

32-character cryptographically secure tokens:
- Cannot be guessed
- Unique per contact
- No login required
- Can be revoked

### Portal Isolation

Each contact only sees:
- Own tickets
- Own comments
- Own attachments

## Best Practices

### Setup

- Enable portal early
- Create test contacts
- Customize branding
- Document process

### Sharing Links

- Include instructions
- Provide support contact
- Mention response time
- Include FAQ link

### Management

- Regenerate tokens periodically
- Revoke for inactive customers
- Monitor portal usage
- Review abandoned tickets
`,
  },

  'location-management': {
    title: 'Location Management',
    description: 'Store service addresses, time zones, and dispatch details.',
    markdown: `# Location Management

Locations capture where work happens. Tie them to organizations for dispatching and SLAs.

## Create a location

1) Go to **Locations** → **New location**
2) Add **Name**, **Address**, **City/State/Postal**, **Country**
3) Set **Time zone** and optional **Geo coordinates** (for routing/ETA)
4) Link to an **Organization** and mark **Default** for that org if needed

## Usage in tickets

- When you pick a contact + org, the default location pre-fills
- Onsite/dispatch rules can key off location (region/time zone)
- Inventory can be assigned to a location (stock rooms, vans, depots)

## Data hygiene

- Keep one default per org; use specific sites for multi-location customers
- Store access notes (gate codes, hours) in custom fields

## API quick start

\`\`\`http
POST /api/{workspaceSlug}/locations
Authorization: Bearer YOUR_WORKSPACE_API_KEY
Content-Type: application/json

{
  "name": "HQ",
  "address": "100 Main St",
  "city": "Austin",
  "country": "US",
  "timezone": "America/Chicago",
  "organizationId": "<org-id>"
}
\`\`\`
`,
  },

  'inventory-management': {
    title: 'Inventory Management',
    description: 'Track parts, stock levels, and where items live.',
    markdown: `# Inventory Management

Use inventory to track parts and assets across locations and vehicles.

## Create an item

1) Go to **Inventory** → **New item**
2) Add **Name**, **SKU/Part #**, **Category**, **Unit cost**
3) Choose **Tracking**: quantity-based or serial-based
4) Set **Home location** and **Reorder threshold**

## Daily workflows

- **Check in/out** items to locations or users
- **Reserve** items on tickets/work orders
- **Low-stock alerts** trigger when below threshold

## Tips

- Use categories for reporting (Parts, Tools, Loaners)
- Use custom fields for vendor, warranty, lifecycle stage

## API quick start

\`\`\`http
PATCH /api/{workspaceSlug}/inventory/{itemId}
Authorization: Bearer YOUR_WORKSPACE_API_KEY
Content-Type: application/json

{
  "quantity": 12,
  "locationId": "<location-id>"
}
\`\`\`
`,
  },

  notifications: {
    title: 'Notifications',
    description: 'Configure email, in-app, and escalation rules.',
    markdown: `# Notifications

Control who gets notified, how, and when.

## Channels

- **Email** — transactional mail from your domain
- **In-app** — bell + inbox inside Tickflo
- **Escalations** — timed rules to leads/managers

## Configure

1) Go to **Settings → Notifications**
2) Choose events (new ticket, status change, SLA breach, mention)
3) Select recipients (assignee, team, requester, watchers)
4) Set delays for escalations and quiet hours if needed

## Deliverability

- Verify sender domain (SPF/DKIM) for better inbox placement
- Keep templates concise; include ticket link + status

## API quick start

\`\`\`http
POST /api/{workspaceSlug}/notifications/test
Authorization: Bearer YOUR_WORKSPACE_API_KEY
Content-Type: application/json

{
  "to": "me@example.com",
  "subject": "Test",
  "body": "Hello"
}
\`\`\`
`,
  },

  'settings-configuration': {
    title: 'Settings & Configuration',
    description: 'Key workspace settings: SLAs, email, security, and branding.',
    markdown: `# Settings & Configuration

Use workspace settings to standardize how your teams operate.

## Essentials

- **Branding:** logo, colors, portal header
- **Email:** sending domain, reply-to, inbound parsing
- **SLA:** targets by priority, calendars, pause rules
- **Security:** MFA required, SSO (OIDC/SAML), session limits
- **Audit log:** review config and permission changes

## Email routing

- Map support addresses to workspaces/queues
- Set fallback assignee/team for new mail

## Calendars & SLAs

- Business hours per workspace
- Pause SLAs on pending/awaiting-customer

## Backups & exports

- Schedule data exports; rotate API keys every 90 days
`,
  },

  'api-documentation': {
    title: 'API Documentation',
    description: 'Authenticate, paginate, and integrate with Tickflo.',
    markdown: `# API Documentation

## Auth

- Use workspace-scoped API keys:
  - Header: \`Authorization: Bearer <API_KEY>\`
- Base URL: \`https://api.tickflo.co\`

## Requests

- Content-Type: \`application/json\`
- Pagination: \`page\` + \`pageSize\`
- Rate limits: 60 rps per workspace (429 if exceeded)

## Webhooks

- Deliveries signed with HMAC-SHA256; verify with your webhook secret
- Retry with exponential backoff on 5xx

## Example

\`\`\`http
GET /api/{workspaceSlug}/tickets?page=1&pageSize=50
Authorization: Bearer <API_KEY>
\`\`\`
`,
  },

  integrations: {
    title: 'Integrations',
    description: 'Connect Tickflo to the tools your teams use.',
    markdown: `# Integrations

## Built-in

- **Slack/Teams:** channel alerts for ticket events
- **Email piping:** route inboxes to workspaces/queues
- **Webhooks:** push ticket/contact events outbound

## Adding an integration

1) Go to **Settings → Integrations**
2) Choose an app (Slack/Teams/Webhooks/Zapier)
3) Follow the connect flow; paste credentials/tokens
4) Map events → destinations; test delivery

## Security

- Use least-privilege tokens
- Rotate secrets regularly
- Monitor webhook failures and disable noisy rules
`,
  },

  troubleshooting: {
    title: 'Troubleshooting',
    description: 'Quick fixes for common setup and runtime issues.',
    markdown: `# Troubleshooting

## Common issues

- **Cannot log in:** check SSO config and clock skew; try password reset
- **Email not sending:** verify domain (SPF/DKIM), check bounce logs
- **Webhooks failing:** inspect 4xx/5xx responses; retry after fixing auth/URL
- **SLA timers wrong:** confirm business hours and pause statuses
- **Slow pages:** reduce large filters, check network tab, and API timings

## Support bundle

- Collect recent logs, request IDs, and steps to reproduce
- Include workspace slug and user email when opening a ticket with us
`,
  },
};

async function getDocs(slug: string): Promise<DocPage | undefined> {
  const doc = markdownDocs[slug as keyof typeof markdownDocs];
  if (!doc) return undefined;

  const html = await marked.parse(doc.markdown);

  return {
    title: doc.title,
    description: doc.description,
    content: html,
  };
}

function getDocsList(): string[] {
  return Object.keys(markdownDocs);
}

export { getDocs, getDocsList };
