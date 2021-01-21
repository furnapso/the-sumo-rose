const homePage = (contentDiv) => {
    contentDiv.style.opacity = 0;

    setTimeout(() => {
        contentDiv.innerHTML = `
    <div class="content-container">
                <img class="float-right" src="images/bowl.jpg">
                    <p>
                        The Sumo Rose is open from 6pm to 10pm, Tuesday to Saturday. We are closed on Sunday, Monday and on
                        public holidays.
                    </p>

                    <p>
                        Dinner reservations take place across two sittings:
                        <ul>
                            <li>
                                1st session: 6pm to 8pm
                            </li>
                            <li>
                                2nd session: from 8.30pm
                            </li>
                        </ul>
                    </p>

                    <p>
                        Our omakase menus are priced at $225 per person.
                    </p>

                    <p>
                        There are no menus or a la carte options at The Sumo Rose. The experience is led by the chef, the
                        produce and the seasons. Please let us know of any dietary requirements when you book.
                    </p>

                    <p>
                        Reservations are essential and taken one month in advance. We open reservations from 12pm on the
                        first Tuesday of each month.
                    </p>
            </div>`

    contentDiv.style.opacity = 1
    }, 400);
}

export default homePage