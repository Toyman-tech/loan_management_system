"use server"
import  {  NextResponse } from "next/server";

type Data = {
	success: boolean;
	data?: Object;
};

export default async (req: Request) => {
	const {
		query: { id },
	}:any = new Request(req);

	try {
        console.log('hy', id)
		const res = await fetch(
			`https://api.paystack.co/transaction/${id}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
				},
			}
		);
		const data:any = await res.json();
		NextResponse.json({ success: true, data: data.data }, {status : 200});
        console.log('congrats')
	} catch (error) {
		NextResponse.json({ success: false }, {status: 400});
	}
};




