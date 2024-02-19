using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;

using Notification.Notifications.Dtos;
using Notification.Notifications.Services;

namespace Notification.Notifications.Functions
{
    public class SendEmailNotification
    {
        private readonly IEmailSenderService emailSenderService;
        public SendEmailNotification(IEmailSenderService emailSenderService)
        {
            this.emailSenderService = emailSenderService;
        }

        [FunctionName(nameof(SendEmailNotification))]
        public void Run([QueueTrigger("notification-queue")] NotificationReadyToSendDto notificationReadyToSend, ILogger log)
        {
            string content = string.Format("EmailContact:{0} \n FullName:{1} \n Message:{2}", notificationReadyToSend.Email, notificationReadyToSend.FullName, notificationReadyToSend.Message);

            this.emailSenderService.SendEmail(content);

            log.LogInformation($"The email has been sent: {notificationReadyToSend.Email}");
        }
    }
}
