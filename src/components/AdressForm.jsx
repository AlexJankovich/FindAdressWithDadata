import React from 'react';
import { FormWrapper, SelectButton, Text, Wrapper } from '../styled/Components';
import { useForm } from 'react-hook-form';
import { HookInput } from './HookInput';

export const AdressForm = ({ data, toggleEdit, saveHandler }) => {

  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
    const newData = data.selectData.map(i => {
      return { ...i, data: { ...formData } }
    })
    saveHandler(newData)
    toggleEdit(false)
  }

  const closeHandler = () => {
    toggleEdit(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      {data.selectData && data.selectData.length !== 0 && <Wrapper>
        {data.selectData.map((item, index) => {
          return (
            <FormWrapper key={index}>
              <Text main={true}>
                Страна
              </Text>
              <HookInput
                control={control}
                name={'country'}
                value={item.data.country}
                errorValue={errors.country}
              />
              <Text main={true}>
                Федеральный округ
              </Text>
              <HookInput
                control={control}
                name={'federal_district'}
                value={item.data.federal_district}
                errorValue={errors.federal_district}
              />
              <Text main={true}>
                Республика, край, область
              </Text>
              <HookInput
                control={control}
                name={'region_with_type'}
                value={item.data.region_with_type}
                errorValue={errors.region_with_type}
              />
              <Text main={true}>
                Район
              </Text>
              <HookInput
                control={control}
                name={'area'}
                value={item.data.area}
                errorValue={errors.area}
              />
              <Text main={true}>
                Почтовый индекс
              </Text>
              <HookInput
                control={control}
                name={'postal_code'}
                value={item.data.postal_code}
                errorValue={errors.postal_code}
              />
              <Text main={true}>
                Город
              </Text>
              <HookInput
                control={control}
                name={'city'}
                value={item.data.city}
                errorValue={errors.city}
              />
              <Text main={true}>
                Улица
              </Text>
              <HookInput
                control={control}
                name={'street_with_type'}
                value={item.data.street_with_type}
                errorValue={errors.street_with_type}
              />
              <Text main={true}>
                Номер дома
              </Text>
              <HookInput
                control={control}
                name={'house'}
                value={item.data.house}
                errorValue={errors.house}
              />
              <Text main={true}>
                Корпус
              </Text>
              <HookInput
                control={control}
                name={'block'}
                value={item.data.block}
                errorValue={errors.block}
              />
            </FormWrapper>
          )
        })}

      </Wrapper>}
      <Wrapper>
        <SelectButton type="submit" variant={'outlined'} simple>
          Сохранить
        </SelectButton>
        <SelectButton type="submit" variant={'outlined'} onClick={closeHandler} simple>
          Закрыть
        </SelectButton>
      </Wrapper>
    </form>
  )
}


