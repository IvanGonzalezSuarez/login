
export default function login({ username, password }) {
    var res = ""

    var Mock = localStorage.getItem('myMock');
    Mock = JSON.parse(Mock)

    Mock.forEach(element => {
        if (element.username === username && element.password === password) {
            var entrada = new Date().getTime()
            var diferencia = entrada - element.time
            diferencia = new Date(diferencia)

            res = {
                "dias": diferencia.getUTCDate() - 1,
                "horas": diferencia.getUTCHours(),
                "minutos": diferencia.getUTCMinutes(),
                "segundos": diferencia.getUTCSeconds()
            }
            element.time = entrada
            localStorage.setItem('myMock', JSON.stringify(Mock));
        }
    });
    return res

}