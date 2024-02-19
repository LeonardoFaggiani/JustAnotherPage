namespace Notification.Notifications.Services
{
    public interface IEmailSenderService
    {
        void SendEmail(string content);
    }
}
