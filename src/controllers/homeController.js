const home = (req, res) => {
    res.status(200).json({"mensagem":"teste da home"});
};

module.exports = {
    home
};
