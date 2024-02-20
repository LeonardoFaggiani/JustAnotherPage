using Microsoft.Extensions.Configuration;

using MimeKit;

namespace Notification.Notifications.Services
{
    public class EmailSenderService : IEmailSenderService
    {
        private readonly IConfiguration configuration;
        private readonly IEmailBuilder emailBuilder;

        public EmailSenderService(IEmailBuilder emailBuilder,
            IConfiguration configuration)
        {
            this.emailBuilder = emailBuilder;
            this.configuration = configuration;
        }

        public void SendEmail(string content)
        {
            MimeMessage message = this.emailBuilder
                .SetFrom(configuration.GetSection("EmailSettingsFrom").Value)
                .SetTo(configuration.GetSection("EmailSettingsTo").Value)
                .SetSubject("Contact from MyPage")
                .SetContent(content)
                .Build();

            using (var client = new MailKit.Net.Smtp.SmtpClient())
            {
                client.Connect("smtp-mail.outlook.com", 587, false);

                client.Authenticate(configuration.GetSection("EmailSettingsEmailAuth").Value, configuration.GetSection("EmailSettingsAppPassword").Value);

                client.Send(message);

                client.Disconnect(true);
            }
        }
    }
}
