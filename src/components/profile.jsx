const user = {
    name: "Leo Mattioli",
    imageURL: "https://instagram.ffco3-1.fna.fbcdn.net/v/t51.29350-15/299308138_596650738707313_2670682911731478414_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEyMDB4MTIwMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.ffco3-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QEpL6gHQJpbg3VdhCR_8TUENm5ZIJrprKjfPNGS84WINoj6cGQczhjsOPgBk52z5LSWle9FEUrVstWLai80DudA&_nc_ohc=JYCLsLyxrfMQ7kNvwEVvQji&_nc_gid=N691shfMT_SwOboCI-8Afg&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MjkwMzYzMjYwMzYyMzUyNTUxMA%3D%3D.3-ccb7-5&oh=00_AfG4NEkBvI0eTRSfDifKHhO950RrLqRJoq8CymTK21U_Ww&oe=67FC4096&_nc_sid=22de04",
    imageSize: 90
};

function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageURL}
                alt={'Foto de ' + user.name}
                style={{ width: user.imageSize, height: user.imageSize }}
            />
            {/*STYLE no es una sintaxis especial, sino un objeto regular {} dentro de las llaves de JSX de style={ }. 
            Se puede utilizar el atributo style cuando tus estilos dependen de variables de JavaScript. */}
        </>
    )
};

export default Profile