import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'marcolibertini',
        name: 'Marco Libertini',
        isFollowing: true
    },
    {
        userName: 'coreiagus',
        name: 'Agustina Corei',
        isFollowing: false
    },
    {
        userName: 'giacomonticone',
        name: 'Giaco Monticone',
        isFollowing: false
    },

]

export function App() {


    return (
        <section className='App'>
            {
                users.map(user => {
                    //const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={user.userName} //debe ser unico
                            userName={user.userName}
                            initialIsFollowing={user.isFollowing}
                        >
                            {user.name}
                        </TwitterFollowCard>
                    )
                })

            }
        </section>

    )

}