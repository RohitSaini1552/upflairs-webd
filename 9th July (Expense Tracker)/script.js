        let transactions = [];
        let nextId = 1;

        function saveToStorage() {
            console.log('Transactions saved:', transactions);
        }

        function loadFromStorage() {
            console.log('Transactions loaded:', transactions);
        }

        const transactionForm = document.getElementById('transactionForm');
        const transactionsContainer = document.getElementById('transactionsContainer');
        const totalBalance = document.getElementById('totalBalance');
        const totalIncome = document.getElementById('totalIncome');
        const totalExpense = document.getElementById('totalExpense');
        const transactionCount = document.getElementById('transactionCount');

        function formatCurrency(amount) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
            }).format(amount);
        }

        function formatDate(dateString) {
            return new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }).format(new Date(dateString));
        }

        function generateId() {
            return nextId++;
        }

        function addTransaction(description, amount, type) {
            const transaction = {
                id: generateId(),
                description: description.trim(),
                amount: parseFloat(amount),
                type: type,
                date: new Date().toISOString()
            };

            transactions.unshift(transaction); 
            saveToStorage();
            renderTransactions();
            updateSummary();
            updateCount();
        }

        function deleteTransaction(id) {
            const element = document.querySelector(`[data-transaction-id="${id}"]`);
            if (element) {
                element.classList.add('slide-out');
                setTimeout(() => {
                    transactions = transactions.filter(t => t.id !== id);
                    saveToStorage();
                    renderTransactions();
                    updateSummary();
                    updateCount();
                }, 250);
            }
        }

        function updateSummary() {
            const income = transactions
                .filter(t => t.type === 'income')
                .reduce((sum, t) => sum + t.amount, 0);

            const expense = transactions
                .filter(t => t.type === 'expense')
                .reduce((sum, t) => sum + t.amount, 0);

            const balance = income - expense;

            totalBalance.textContent = formatCurrency(balance);
            totalIncome.textContent = formatCurrency(income);
            totalExpense.textContent = formatCurrency(expense);

           
            const balanceCard = totalBalance.closest('.summary-card');
            balanceCard.classList.remove('income', 'expense');
            if (balance > 0) {
                balanceCard.classList.add('income');
            } else if (balance < 0) {
                balanceCard.classList.add('expense');
            }
        }

        function updateCount() {
            const count = transactions.length;
            transactionCount.textContent = `${count} transaction${count !== 1 ? 's' : ''}`;
        }

        function renderTransactions() {
            if (transactions.length === 0) {
                transactionsContainer.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">📊</div>
                        <div class="empty-title">No transactions yet</div>
                        <div class="empty-subtitle">Add your first transaction using the form above</div>
                    </div>
                `;
                return;
            }

            const tableHTML = `
                <table class="transactions-table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${transactions.map(transaction => `
                            <tr class="fade-in" data-transaction-id="${transaction.id}">
                                <td>
                                    <div class="transaction-description">${transaction.description}</div>
                                    <span class="transaction-type ${transaction.type}">${transaction.type}</span>
                                </td>
                                <td style="color: #6b7280; font-size: 13px;">
                                    ${formatDate(transaction.date)}
                                </td>
                                <td>
                                    <span class="transaction-amount ${transaction.type}">
                                        ${transaction.type === 'income' ? '+' : '-'}${formatCurrency(Math.abs(transaction.amount))}
                                    </span>
                                </td>
                                <td class="transaction-actions">
                                    <button class="btn btn-ghost" onclick="deleteTransaction(${transaction.id})" title="Delete transaction">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;

            transactionsContainer.innerHTML = tableHTML;
        }

        transactionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const description = document.getElementById('description').value;
            const amount = document.getElementById('amount').value;
            const type = document.getElementById('type').value;

            if (description && amount && parseFloat(amount) > 0) {
                addTransaction(description, amount, type);
                transactionForm.reset();
                document.getElementById('description').focus();
            }
        });

        document.getElementById('amount').addEventListener('input', function(e) {
            const value = parseFloat(e.target.value);
            if (value < 0) {
                e.target.value = Math.abs(value);
            }
        });

        function init() {
            loadFromStorage();
            renderTransactions();
            updateSummary();
            updateCount();
            document.getElementById('description').focus();
        }

        init();
