using MimeKit;

namespace Notification.Notifications.Services
{
    public class EmailBuilder : IEmailBuilder
    {
        private readonly MimeMessage MimeMessage;

        public EmailBuilder()
        {
            MimeMessage = new MimeMessage();
        }

        public IEmailBuilder SetFrom(string email)
        {
            this.MimeMessage.From.Add(new MailboxAddress("Origin Contact", email));

            return this;
        }
        public IEmailBuilder SetTo(string email)
        {
            this.MimeMessage.To.Add(new MailboxAddress("Destination Contact", email));

            return this;
        }

        public IEmailBuilder SetSubject(string subject)
        {
            this.MimeMessage.Subject = subject;

            return this;
        }

        public IEmailBuilder SetContent(string content)
        {
            var bodyBuilder = new BodyBuilder();

            bodyBuilder.TextBody = content;

            this.MimeMessage.Body = bodyBuilder.ToMessageBody();

            return this;
        }

        public MimeMessage Build() =>
            this.MimeMessage;
    }
}
