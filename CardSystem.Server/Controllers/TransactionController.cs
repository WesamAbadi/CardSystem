using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CardSystem.Server.Data;
using CardSystem.Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardSystem.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransactionsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TransactionsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetTransactions")]
        public async Task<IEnumerable<Transaction>> Get()
        {
            return await _context.Transactions.ToListAsync();
        }

        [HttpGet("{id}", Name = "GetTransactionById")]
        public async Task<ActionResult<Transaction>> GetById(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);
            if (transaction == null)
            {
                return NotFound();
            }
            return transaction;
        }

        // Add other CRUD operations as needed...

        private bool TransactionExists(int id)
        {
            return _context.Transactions.Any(e => e.Id == id);
        }
    }
}
