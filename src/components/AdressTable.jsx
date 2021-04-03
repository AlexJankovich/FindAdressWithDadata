import { FormWrapper, SelectButton, Text, Wrapper } from '../styled/Components';


export const AdressTable = ({ data, toggleEdit, resetHandler }) => {

  const editHandler = () => {
    toggleEdit(true)
  }

  return (
    <>
      {data.selectData && data.selectData.length !== 0 &&
      <>
        <Wrapper>Вы выбрали:</Wrapper>
        <Wrapper>
          {data.selectData.map((item, index) => {
            return (
              <FormWrapper key={index}>
                <Text main={true}>
                  Страна
                </Text>
                <Text>
                  {item.data.country}
                </Text>
                <Text main={true}>
                  Федеральный округ
                </Text>
                <Text>
                  {item.data.federal_district}
                </Text>
                <Text main={true}>
                  Республика, край, область
                </Text>
                <Text>
                  {item.data.region_with_type}
                </Text>
                <Text main={true}>
                  Район
                </Text>
                <Text>
                  {item.data.area}
                </Text>
                <Text main={true}>
                  Почтовый индекс
                </Text>
                <Text>
                  {item.data.postal_code}
                </Text>
                <Text main={true}>
                  Город
                </Text>
                <Text>
                  {item.data.city}
                </Text>
                <Text main={true}>
                  Улица
                </Text>
                <Text>
                  {item.data.street_with_type}
                </Text>
                <Text main={true}>
                  Номер дома
                </Text>
                <Text>
                  {item.data.house}
                </Text>
                <Text main={true}>
                  Корпус
                </Text>
                <Text>
                  {item.data.block}
                </Text>
              </FormWrapper>
            )
          })}
        </Wrapper>
        <Wrapper>
          <SelectButton variant={'outlined'} onClick={() => editHandler()} simple >
            Редактировать
          </SelectButton>
          <SelectButton variant={'outlined'} onClick={() => resetHandler()} simple>
            Сбросить
          </SelectButton>
        </Wrapper>
      </>
      }
    </>
  )
}