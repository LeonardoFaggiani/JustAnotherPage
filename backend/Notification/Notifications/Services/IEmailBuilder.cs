using MimeKit;

namespace Notification.Notifications.Services
{
    public interface IEmailBuilder
    {
        IEmailBuilder SetTo(string email);
        IEmailBuilder SetFrom(string email);
        IEmailBuilder SetSubject(string subject);
        IEmailBuilder SetContent(string content);
        MimeMessage Build();
    }
}
