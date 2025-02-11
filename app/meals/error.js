"use client";

export default function Error({error}) {
    console.log('error: ', error);

    return (<main className={'error'}>
        <h1>Error Page</h1>
        <p>An error has occurred.</p>
        <p>Please try again later.</p>
    </main>)
}