using System.Threading.Tasks;

using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;

using Notification.Notifications.Dtos;

namespace Notification.Notifications.Functions
{
    public class SendEmailNotification
    {
        [FunctionName(nameof(SendEmailNotification))]
        public async Task Run([QueueTrigger("notification-queue")] NotificationReadyToSendDto notificationReadyToSend, ILogger log)
        {
            log.LogInformation($"The email has been sent: {notificationReadyToSend.Email}");
        }
    }
}
