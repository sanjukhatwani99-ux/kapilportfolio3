export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'address', title: 'Studio Address', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'studioHours', title: 'Studio Hours', type: 'string' },
    { name: 'instagramUrl', title: 'Instagram URL', type: 'url' },
    { name: 'facebookUrl', title: 'Facebook URL', type: 'url' },
    { name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }
  ]
};
