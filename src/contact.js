const contact = (contentDiv) => {
    contentDiv.innerHTML = `
    <div class="content-container">
                <div class="two-column-container">
                    <div class="col-1">
                        <h1>Contact</h1>
                        <p>
                            123 Lord Street, Richmond VIC 3121
                        </p>
                        <p>+61311111872</p>
                        <p>hello@thesumorose.com</p>
                    </div>
                    <div class="col-2">
                        <h1>Reservation</h1>
                        <form>
                            <input type="text" placeholder="Name" autofocus require>
                            <input type="tel" placeholder="Phone" required>
                            <input type="date" required>
                            <button>Book</button>
                        </form>
                    </div>
                </div>
            </div>
    `
}

export default contact