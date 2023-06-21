import ps from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt='rere' className={ps.content_img} src='../kartinki/Nachalo.jpeg' />
            </div>
            <div className={ps.description_block}>
                <img alt="rere" className={ps.eternity_img} src='../kartinki/Eternity.jpg' />
                <div className={ps.razdel}>ava + description</div>
            </div>
        </div>
    )
}

export default ProfileInfo;