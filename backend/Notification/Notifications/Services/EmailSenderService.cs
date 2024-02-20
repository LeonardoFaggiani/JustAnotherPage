using System;

using Microsoft.Extensions.Logging;

using MimeKit;

namespace Notification.Notifications.Services
{
    public class EmailSenderService : IEmailSenderService
    {
        private readonly IEmailBuilder emailBuilder;
        private readonly ILogger logger;

        public EmailSenderService(IEmailBuilder emailBuilder, ILogger logger)
        {
            this.emailBuilder = emailBuilder;
            this.logger = logger;
        }

        public void SendEmail(string content)
        {
            logger.LogInformation(string.Format("The email from is {0}", Environment.GetEnvironmentVariable("EmailSettingsFrom")));

            MimeMessage message = this.emailBuilder
                .SetFrom(Environment.GetEnvironmentVariable("EmailSettingsFrom"))
                .SetTo(Environment.GetEnvironmentVariable("EmailSettingsTo"))
                .SetSubject("Contact from MyPage")
                .SetContent(content)
                .Build();

            using (var client = new MailKit.Net.Smtp.SmtpClient())
            {
                client.Connect("smtp-mail.outlook.com", 587, false);

                client.Authenticate(Environment.GetEnvironmentVariable("EmailSettingsEmailAuth"), Environment.GetEnvironmentVariable("EmailSettingsAppPassword"));

                client.Send(message);

                client.Disconnect(true);
            }
        }
    }
}
