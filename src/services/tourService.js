

export const tourService = {
    createDestination: async (travelData) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travelData)
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    },
    editDestination: async (id,updatedData) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    },

    deleteDestination: async (id) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    },

    getAllDestinations: async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination`);

            const data = await res.json();


            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            return data.data ? data.data : data;


        } catch (error) {
            console.error("Fetch Error:", error.message);
            throw error;
        }
    },

    getSingleDestination: async (id) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination/${id}`);

            const data = await res.json();


            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            return data.data ? data.data : data;


        } catch (error) {
            console.error("Fetch Error:", error.message);
            throw error;
        }
    }
}