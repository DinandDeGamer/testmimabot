module.exports.run = async (client, message, args) => {

    // !clear aantal

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Je hebt geen toegang voor dit commando.");

    if (!args[0]) return message.reply("Geef een aantal op dat je weg wilt halen.");

    if (parseInt(args[0])) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (parseInt(args[0]) === 1) {

                message.channel.send("Ik heb 1 bricht verwijderd.").then(msg => {

                    setTimeout(() => {

                        msg.delete();

                    }, 3000);
                });

            } else {
                message.channel.send(`Ik heb ${parseInt(args[0])} brichten verwijderd.`).then(msg => {

                    setTimeout(() => {

                        msg.delete();

                    }, 3000);
                });


            }

        }).catch(err => {

            return message.reply("Geef een getal hoger dan 0.")

        });

    } else {
        return message.reply("Geef een getal op.");
    }

}

module.exports.help = {

    name: "clear",
    category: "general"

}