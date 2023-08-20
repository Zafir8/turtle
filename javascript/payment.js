function cardValidation() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Month is zero-based

    return {
        card: { expiryDate: '' },
        showMessage: false,
        showInvalidYear: false,
        checkExpiry() {
            const [inputMonth, inputYear] = this.card.expiryDate.split('/');
            const yearPrefix = (currentYear.toString()).substr(0, 2);
            const inputYearFull = yearPrefix + inputYear;

            if (parseInt(inputYearFull) < currentYear || (parseInt(inputYearFull) === currentYear && parseInt(inputMonth) < currentMonth)) {
                this.showMessage = true;
                this.showInvalidYear = false;
            } else if (inputYear.length !== 2 || parseInt(inputYearFull) < parseInt(yearPrefix)) {
                this.showInvalidYear = true;
                this.showMessage = false;
            } else {
                this.showMessage = false;
                this.showInvalidYear = false;
            }
        },
    };
}