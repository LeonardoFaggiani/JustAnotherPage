using Microsoft.Extensions.Logging;

namespace Notification.Notifications.Services
{
    public interface IEmailSenderService
    {
        void SendEmail(string content, ILogger logger);
    }
}
