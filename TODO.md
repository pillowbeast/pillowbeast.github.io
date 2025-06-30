## Hugo Site

### Major
- [ ] Publish to Hugo Website
- [ ] Newsletter with Subscription
- [ ] TinaCMS / DecapCMS -> Add GUI for markdown editing
- [ ] Comment Section underneath (Commerical/Open-Source solutions, see Hugo Comments) \
{{< bullet content="Steps:" extra-info="API in the backend (like Flask/FastAPI) / Database (e.g. SQLite, JSON) / Client-Side Javascript to post comment/like etc. / Comment Shortcode that reads out stored data / automating Hugo Rebuilds" >}}

The Tech Stack is based on **Hugo Frontend** (fixed), then a **Backend** (Flask/Express/FastAPI), a **Database** for storing of Comments & Emails, a mail client for sending of newsletter **Mailgun/SendGrid/Postmark**, where to host **self-host/Railway/Render** and **Automation** vai Github Actions to rebuild Hugo.

### Minor
- [ ] Fix 'Update Submodules' Workflow by using ssh keys and configuring users (see Github Actions)
- [ ] Add Accordion to the Commands Page (for readability)

### Bugs
- [ ] Code Copy Button
