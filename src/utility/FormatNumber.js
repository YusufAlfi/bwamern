export default number => {
    const nmr = new Intl.NumberFormat("id-ID");
    return nmr.format(number);
};
