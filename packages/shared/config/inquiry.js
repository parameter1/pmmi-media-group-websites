module.exports = {
  enabled: true,
  directSend: false,
  sendTo: 'info-request@pmmimediagroup.com',
  replyTo: 'info-request@pmmimediagroup.com',
  sendFrom: 'Support <noreply@parameter1.com>',
  logo: 'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=45&auto=format,compress&q=70',
  bgColor: '#000',
  consentCheckboxes: [
    {
      key: 'privacyConsent',
      label: 'privacyConsent',
      html: '<span class="small">I consent to PMMI collecting and storing my information and consent to receive emails as well as sponsored advertisements from PMMI Media Group. I have read PMMI Media Group\'s privacy policy and I understand that I can unsubscribe or opt out at any time, and I can reach your Chief Privacy Officer at <a href="mailto:dataprivacy@pmmi.org">dataprivacy@pmmi.org</a> with any inquiries around privacy policies or practices.</span>',
      required: false,
    },
    {
      key: 'notificationConsent',
      label: 'notificationConsent',
      html: '<span class="small">I agree to share my information with and receive occasional updates from the company mentioned in this article.</span>',
      required: true,
    },
    {
      key: 'thirdPartyConsent',
      label: 'thirdPartyConsent',
      html: '<span class="small">Note that once shared, future communications may come directly from the sponsor and are not governed by PMMI Media Group\'s privacy policy.</span>',
      required: true,
    },
  ],
};
