import './app-info.css'

const AppInfo = ({ countStaff, countEmploeeBonus, countEmploeePromotion }) => {
	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании</h1>
			<h6>Общий штат: {countStaff} </h6>
			<h6>Получат бонус: {countEmploeeBonus}</h6>
			<h6>Претендент на повышение: {countEmploeePromotion}</h6>
		</div>
	)
}

export default AppInfo;
