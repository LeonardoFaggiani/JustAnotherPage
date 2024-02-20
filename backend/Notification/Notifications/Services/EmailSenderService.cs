using System;

using MimeKit;

namespace Notification.Notifications.Services
{
    public class EmailSenderService : IEmailSenderService
    {
        private readonly IEmailBuilder emailBuilder;

        public EmailSenderService(IEmailBuilder emailBuilder)
        {
            this.emailBuilder = emailBuilder;
        }

        public void SendEmail(string content)
        {
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
