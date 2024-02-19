using System.IO;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;

namespace Notification.Infrastructure
{
    public static class Extensions
    {
        public static async Task<TDto> AsDtoAsync<TDto>(this HttpRequest request)
        {
            var requestBody = string.Empty;

            using (var reader = new StreamReader(request.Body))
                requestBody = await reader.ReadToEndAsync();

            var dto = Newtonsoft.Json.JsonConvert.DeserializeObject<TDto>(requestBody);

            return dto;
        }
    }
}
