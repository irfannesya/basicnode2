class MamaliaControler {
    constructor(mamaliaService) {
        this.mamaliaService = new mamaliaService();
    }
    getSuara(){
        this.mamaliaService.getSuara();
    }
}