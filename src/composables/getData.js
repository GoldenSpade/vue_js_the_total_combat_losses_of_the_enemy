import {ref} from 'vue'

const weaponNames = [
  {
    ua: 'Втрати особового складу',
    en: 'Personnel losses',
  },
  {
    ua: 'Танки',
    en: 'Tanks',
  },
  {
    ua: 'ББМ',
    en: 'APV',
  },
  {
    ua: 'Арт. системи',
    en: 'Artillery systems',
  },
  {
    ua: 'РСЗВ',
    en: 'MLRS',
  },
  {
    ua: 'Засоби ППО',
    en: 'Anti-aircraft warface systems',
  },
  {
    ua: 'Літаки',
    en: 'Planes',
  },
  {
    ua: 'Гелікоптери',
    en: 'Helicopters',
  },
  {
    ua: 'Автотехніка',
    en: 'Vehicles',
  },
  {
    ua: 'Кораблів, катерів',
    en: 'Ships and boats',
  },
  {
    ua: 'Крил. ракет',
    en: 'Cruise missiles',
  },
  {
    ua: 'Бпла',
    en: 'UAV',
  },
  {
    ua: 'Спец. техніки',
    en: 'Special Equipment',
  },
  {
    ua: 'Отрк / Трк',
    en: 'OTMS',
  },
]

// get current date

const currentDate = () => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  function addZero(month) {
    if (+month < 10) {
      return `0${month}`
    } else {
      return month
    }
  }

  const yearSpliced = String(year).split('').splice(2, 4).join('')

  return `${addZero(day)}.${addZero(month)}.${yearSpliced}`
}

// get data from API

const getData = () => {
  let day = ref(null)

  let statsDataArr = []
  let arrHalf1 = ref([])
  let arrHalf2 = ref([])
  let personalUnits = ref(null)

  let error = ref(null)

  const load = async () => {
    try {
      const data = await fetch(
        'https://russianwarship.rip/api/v1/statistics/latest'
      )
      if (!data.ok) {
        throw Error('No data available.')
      }
      const res = await data.json()

      Object.entries(res.data.stats).forEach((x, i) =>
        statsDataArr.push([
          ...x,
          weaponNames[i].ua,
          weaponNames[i].en,
          `./img/losses/img-${i + 1}.png`,
        ])
      )

      for (let i = 1; i <= 9; i++) {
        arrHalf1.value.push(statsDataArr[i])
      }

      for (let i = 10; i <= 13; i++) {
        arrHalf2.value.push(statsDataArr[i])
      }

      personalUnits.value = statsDataArr[0][1]
      day.value = res.data.day
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return {
    error,
    currentDate,
    day,
    arrHalf1,
    arrHalf2,
    personalUnits,
    load,
  }
}

export default getData
