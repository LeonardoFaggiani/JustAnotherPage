using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using Notification.Notifications.Services;

namespace Notification.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IEmailSenderService, EmailSenderService>();
            services.AddScoped<IEmailBuilder, EmailBuilder>();

            return services;
        }
    }
}
