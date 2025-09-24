# reCAPTCHA Setup Guide

## Current Issue

You're getting reCAPTCHA errors because the site key `6Le7g80rAAAAAEFq3p12UNydkj0eqjEqDxqsK9SO` is not configured for the current domain.

## Solutions

### For Development (localhost:3000)

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Find your site key `6Le7g80rAAAAAEFq3p12UNydkj0eqjEqDxqsK9SO`
3. Click on "Settings" (gear icon)
4. Add `localhost` to the "Domains" list
5. Save the changes

### For Production

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Find your site key `6Le7g80rAAAAAEFq3p12UNydkj0eqjEqDxqsK9SO`
3. Click on "Settings" (gear icon)
4. Add your production domain (e.g., `yourdomain.com`) to the "Domains" list
5. Save the changes

### Alternative: Create New reCAPTCHA

If you don't have access to modify the current reCAPTCHA:

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "+" to create a new site
3. Choose "reCAPTCHA v2" → "I'm not a robot" checkbox
4. Add your domains:
   - `localhost` (for development)
   - Your production domain
5. Copy the new site key
6. Update your `.env` file with the new `REACT_APP_RECAPTCHA_SITE_KEY`

## Temporary Fix

The form now works without reCAPTCHA if the site key fails to load, but for production you should fix the domain configuration.
