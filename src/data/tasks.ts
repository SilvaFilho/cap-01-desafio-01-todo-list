import { v4 as uuidv4 } from "uuid";

export const taksListTest = [
    {
        id: uuidv4(),
        task: `
            Mussum Ipsum, cacilds vidis litro abertis. 
            Aenean aliquam molestie leo, vitae iaculis nisl.
            Quem manda na minha terra sou euzis!
            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. 
            Nam vulputate dapibus.Manduma pindureta quium dia nois paga.
        `,
        isComplete: false,
    },
    {
        id: uuidv4(),
        task: `
            Copo furadis é disculpa de bebadis, arcu quam euismod magna.
            Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. 
            Sed non consequat odio.
            Quem num gosta di mim que vai caçá sua turmis!
            A ordem dos tratores não altera o pão duris.
        `,
        isComplete: true,
    },
    {
        id: uuidv4(),
        task: `
            Nec orci ornare consequat. 
            Praesent lacinia ultrices consectetur. 
            Sed non ipsum felis.
            Sapien in monti palavris qui num significa nadis i pareci latim.
            Per aumento de cachacis, eu reclamis.
            Admodum accumsan disputationi eu sit. 
            Vide electram sadipscing et per.
        `,
        isComplete: false,
    },
];
