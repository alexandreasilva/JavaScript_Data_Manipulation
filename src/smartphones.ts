let smartphones = [
    {
        id: 1,
        modelo: 'Samsung Galaxy S22 Ultra',
        processador: '1x 3.0 GHz Cortex-X2 + 3x 2.5 GHz Cortex-A710 + 4x 1.8 GHz Cortex-A510',
        chipset: 'Snapdragon 8 Gen1 Qualcomm SM8450',
        ram: '12 GB',
        memória: '512 GB',
        polegadas: 6.8,
        resolucao: '144 x 3080 pixel',
        camera: '108 Mp + 12 Mp + 10 Mp + 10 Mp',
        bateria: 5000
    },
    {
        id: 2,
        modelo: 'Apple iPhone 14 Pro Max',
        processador: '2x 3.46 GHz Avalanche + 4x 2.02 Blizzard',
        chipset: 'Apple A16 Bionic',
        ram: '6 GB',
        memória: '1000 GB',
        polegadas: 6.7,
        resolucao: '1290 x 2796 pixel',
        camera: '48 Mp + 12 Mp + 12 Mp',
        bateria: 4323
    },
    {
        id: 3,
        modelo: 'Asus ROG Phone 6D Ultimate',
        processador: '1x 3.2 GHz Cortex-X2 + 3x 2.85 GHz Cortex-A710 + 4x 1.80 GHz Cortex-A510',
        chipset: 'Dimensity 9000 Plus MediaTek',
        ram: '6 GB',
        memória: '1000 GB',
        polegadas: 6.78,
        resolucao: '8165 x 6124 pixel',
        camera: '50 Mp + 13 Mp + 5 Mp',
        bateria: 6000
    },
    {
        id: 4,
        modelo: 'Nubia Red Magic 7S Pro',
        processador: '1x 3.19 GHz Cortex-X2 + 3x 2.75 GHz Cortex-A710 + 4x 1.80 GHz Cortex-A510',
        chipset: 'Snapdragon 8 Plus Gen 1 Qualcomm SM8475',
        ram: '12 GB',
        memória: '256 GB',
        polegadas: 6.8,
        resolucao: '9238 x 6928 pixel',
        camera: '64 Mp + 8 Mp + 2 Mp',
        bateria: 5160
    }
]

function getSmartphones() {
    return smartphones
}

export default getSmartphones