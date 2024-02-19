using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;

using Notification.Infrastructure;
using Notification.Notifications.Constants;
using Notification.Notifications.Dtos;

namespace Notification.Notifications.Functions
{
    public class SaveEmailMessageInQueue
    {
        [FunctionName(nameof(SaveEmailMessageInQueue))]
        public async Task Run([HttpTrigger(AuthorizationLevel.Anonymous, HttpVerbs.POST)] HttpRequest request,
        [Queue(Routes.Queue.Notification)] IAsyncCollector<NotificationReadyToSendDto> notificationReadyToSendCollector)
        {
            var notificationReadyToSendDto = await request.AsDtoAsync<NotificationReadyToSendDto>();

            await notificationReadyToSendCollector.AddAsync(notificationReadyToSendDto);
        }
    }
}