/**
 * Formatea la fecha de un mensaje para mostrar en el Sidebar estilo WhatsApp:
 * - Para hoy: muestra la hora en formato "[Hora: Min]" (ej: 14:30)
 * - Para ayer: muestra "Ayer"
 * - Para fechas más lejanas: muestra la fecha en formato "[DD/MM/AAAA]" (ej: 18/09/2026)
 *
 * @param {Date | string | number} fechaMensaje - Fecha a formatear (instancia Date, string ISO o timestamp)
 * @returns {string} Fecha formateada según la regla
 */
export function formatearFechaSidebar(fechaMensaje) {
    if (!fechaMensaje) return "";

    const fecha = fechaMensaje instanceof Date ? fechaMensaje : new Date(fechaMensaje);

    // Si no es una fecha válida (por ej. si vino un string que no se puede parsear), devolvemos el valor original
    if (isNaN(fecha.getTime())) {
        return String(fechaMensaje);
    }

    const ahora = new Date();

    // 1. Caso Hoy: coincide año, mes y día
    const esHoy =
        fecha.getDate() === ahora.getDate() &&
        fecha.getMonth() === ahora.getMonth() &&
        fecha.getFullYear() === ahora.getFullYear();

    if (esHoy) {
        const horas = String(fecha.getHours()).padStart(2, "0");
        const minutos = String(fecha.getMinutes()).padStart(2, "0");
        return `${horas}:${minutos}`;
    }

    // 2. Caso Ayer: coincide año, mes y día con el día anterior
    const ayer = new Date(ahora);
    ayer.setDate(ahora.getDate() - 1);

    const esAyer =
        fecha.getDate() === ayer.getDate() &&
        fecha.getMonth() === ayer.getMonth() &&
        fecha.getFullYear() === ayer.getFullYear();

    if (esAyer) {
        return "Ayer";
    }

    // 3. Fechas más lejanas: [DD/MM/AAAA]
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
}

export default formatearFechaSidebar;
