if (me === undefined || me.username != "admin") {
    cancel("Unauthorized access", 401);
}