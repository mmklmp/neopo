# Neon Potions - Deployment Guide

## Overview
This is a static "under construction" page for neonpotions.com, optimized for deployment on Cloudflare Pages with GitHub integration.

## Files Structure
- `index.html` - Main HTML file with semantic markup and meta tags
- `style.css` - Optimized CSS with performance enhancements
- `script.js` - Animated gradient background with cleanup
- `_headers` - Cloudflare Pages cache and security headers
- `_redirects` - URL redirects (www to non-www)
- `wrangler.toml` - Cloudflare configuration (optional)

## Performance Optimizations

### HTML Optimizations
- Semantic HTML5 markup with proper heading hierarchy
- Open Graph meta tags for social sharing
- DNS prefetch for external resources
- Accessibility attributes (aria-label, role, title)

### CSS Optimizations
- CSS containment for layout isolation
- Will-change hints for animated elements
- Optimized transitions (only animate necessary properties)
- Responsive design with mobile-first approach

### JavaScript Optimizations
- Canvas context created without alpha channel (alpha: false)
- Proper animation frame cleanup on page unload
- Efficient color interpolation
- Minimal DOM manipulation

### Cloudflare Optimizations
- **Cache-Control Headers**:
  - HTML: 5 minutes (300s) - allows frequent updates
  - CSS/JS: 1 year with immutable flag - leverages browser cache
  - Images: 1 year with immutable flag
  - Default: 1 hour for other assets

- **Security Headers**:
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: SAMEORIGIN
  - X-XSS-Protection: 1; mode=block
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy: Restricts geolocation, microphone, camera

- **URL Redirects**:
  - www.neonpotions.com → neonpotions.com (301 permanent redirect)
  - HTTP → HTTPS (automatic via Cloudflare)

## Deployment Steps

### 1. Initial Setup
```bash
# Clone the repository
git clone https://github.com/mmklmp/neopo.git
cd neopo

# Verify files are in place
ls -la
```

### 2. GitHub Configuration
- Ensure the repository is connected to Cloudflare Pages
- Set branch to deploy (typically `main`)
- No build command needed (static site)
- Root directory: `/` (default)

### 3. Cloudflare Pages Setup
1. Go to Cloudflare Dashboard → Pages
2. Create new project → Connect to Git
3. Select the `neopo` repository
4. Configure build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: (leave empty)
5. Set environment variables (if needed):
   - None required for this static site
6. Deploy!

### 4. Domain Configuration
1. In Cloudflare Dashboard, go to Domains
2. Add `neonpotions.com` to your Cloudflare account
3. Update nameservers at your domain registrar
4. Wait for DNS propagation (usually 24-48 hours)
5. In Pages settings, add custom domain: `neonpotions.com`

### 5. Cloudflare Settings to Optimize
1. **Caching**:
   - Cache Level: Cache Everything
   - Browser Cache TTL: 1 hour
   - Edge Cache TTL: 1 month

2. **Speed**:
   - Enable Brotli compression
   - Enable HTTP/2 Prioritization
   - Enable Mirage (image optimization)
   - Enable Polish (image compression)

3. **Security**:
   - SSL/TLS: Full (Strict)
   - Always Use HTTPS: On
   - Automatic HTTPS Rewrites: On
   - Minimum TLS Version: 1.2

4. **Rules** (if using Cloudflare Pro+):
   - Cache Rules: Cache static assets aggressively
   - Origin Rules: Set cache behavior per path

## GitHub Settings to Optimize

### 1. Repository Settings
- **Visibility**: Public or Private (your choice)
- **Default branch**: main
- **Branch protection rules**: Optional but recommended
  - Require status checks before merging
  - Require branches to be up to date

### 2. GitHub Actions (Optional)
You can add automated checks:
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push, pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: treosh/lighthouse-ci-action@v9
```

### 3. Auto-deployment
- Cloudflare Pages automatically deploys on push to main
- Preview deployments for all pull requests
- No additional configuration needed

## Monitoring & Maintenance

### Performance Monitoring
1. Use Cloudflare Analytics to track:
   - Page views
   - Bandwidth usage
   - Cache hit ratio
   - Response times

2. Use Google Lighthouse to audit:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

### Updates
When you're ready to launch the full site:
1. Update `index.html` with actual content
2. Replace logo placeholder with real logo image
3. Update social media links with actual URLs
4. Adjust color scheme if needed
5. Push to GitHub - automatic deployment to Cloudflare Pages

## Troubleshooting

### Site not updating
- Check GitHub Actions for deployment status
- Verify Cloudflare Pages build logs
- Clear browser cache (Ctrl+Shift+Del)
- Check Cloudflare cache status

### Performance issues
- Review Cloudflare Analytics
- Check Core Web Vitals in Google Search Console
- Use Lighthouse for detailed performance audit
- Optimize images if added

### Domain not resolving
- Verify nameservers are updated at registrar
- Check DNS propagation (use whatsmydns.net)
- Ensure domain is added in Cloudflare Pages settings
- Wait 24-48 hours for full propagation

## Resources
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Web Vitals Guide](https://web.dev/vitals/)
- [HTTP Headers Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
