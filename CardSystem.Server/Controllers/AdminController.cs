using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CardSystem.Server.Data;
using CardSystem.Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace CardSystem.Server.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AdminController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("add-user")]
        public async Task<IActionResult> AddUser(User user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            // Log the added user
            Console.WriteLine($"User added successfully: {user}");

            return Ok("User added successfully.");
        }


        [HttpPost("add-card-to-user")]
        public async Task<IActionResult> AddCardToUser(int userId, Card card)
        {
            var user = await _context.Users.Include(u => u.Accounts).FirstOrDefaultAsync(u => u.Id == userId);
            if (user == null)
                return NotFound("User not found.");

            // Assuming each user has only one account
            var account = user.Accounts.FirstOrDefault();
            if (account == null)
                return BadRequest("User account not found.");

            card.AccountId = account.Id; // Assuming this is the property to store the account ID
            _context.Cards.Add(card);
            await _context.SaveChangesAsync();
            return Ok("Card added to user successfully.");
        }
    }
}
