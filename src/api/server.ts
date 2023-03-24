const token = 'a59fb10c5562587b689fd99feceeb0865f0783ef88abacf8'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://mousy-guttural-detective.glitch.me/contacts`,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
               'Access-Control-Allow-Origin' : '*',
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://mousy-guttural-detective.glitch.me/contacts`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://mousy-guttural-detective.glitch.me/contacts/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string, data: any = {}) => {
        const response = await fetch(`https://mousy-guttural-detective.glitch.me/contacts/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}