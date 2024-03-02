using CardSystem.Server.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using System.Threading.Tasks;

namespace CardSystem.Server.Services
{
    public class EmailSender : IEmailSender<User>
    {
        public Task SendConfirmationLinkAsync(User user, string email, string confirmationLink)
        {
/*            throw new NotImplementedException();
*/            return Task.CompletedTask;

        }

        public Task SendEmailAsync(User user, string subject, string htmlMessage)
        {
            // Implement your email sending logic here
            // Example: Use SMTP client, SendGrid, etc.
            // For demonstration purposes, you can just return a completed task
            return Task.CompletedTask;
        }

        public Task SendPasswordResetCodeAsync(User user, string email, string resetCode)
        {
/*            throw new NotImplementedException();
*/            return Task.CompletedTask;

        }

        public Task SendPasswordResetLinkAsync(User user, string email, string resetLink)
        {
            /*throw new NotImplementedException();*/
            return Task.CompletedTask;

        }
    }
}
