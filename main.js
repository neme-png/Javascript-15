function palindroma(stringa) {
    let pulita = stringa.replace(/\W/g, "");

    return pulita === pulita.split("").reverse().join("");
}
console.log (palindroma("i topi non avevano nipoti"));

