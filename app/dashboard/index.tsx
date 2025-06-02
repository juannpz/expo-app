// En alguna de tus pantallas, por ejemplo: HomeScreen.tsx
import { Ionicons } from '@expo/vector-icons'; // Ejemplo de iconos
import CardFactory from 'components/ui/card/CardFactory';
import { CardVariant } from 'components/ui/card/card.definition';
import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native'; // Importa componentes base
import { SafeAreaView } from 'react-native-safe-area-context';

// SafeAreaView es recomendable para el contenedor principal

// Ya no necesitamos:
// import { styled } from 'nativewind';
// const StyledSafeAreaView = styled(View, 'flex-1 bg-gray-50 dark:bg-gray-900');
// const StyledScrollView = styled(ScrollView, 'p-4');
// const StyledText = styled(Text);

// Crea instancias de tarjetas para diferentes variantes
const PrimaryCard = CardFactory(CardVariant.Primary);
const SecondaryCard = CardFactory(CardVariant.Secondary);
const OutlinedCard = CardFactory(CardVariant.Outlined);
const ElevatedCard = CardFactory(CardVariant.Elevated);
const InfoCard = CardFactory(CardVariant.Info);
const SuccessCard = CardFactory(CardVariant.Success);
const WarningCard = CardFactory(CardVariant.Warning);
const DangerCard = CardFactory(CardVariant.Danger);

const HomeScreen = () => {
  return (
    // Es altamente recomendable usar SafeAreaView para evitar que el contenido se solape con la barra de estado o el notch
    // Asegúrate de tener 'react-native-safe-area-context' instalado
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" /> {/* Ajusta según tu tema */}
      {/* Si usas tema oscuro, podrías querer barStyle="light-content" y un backgroundColor oscuro */}
      <ScrollView className="p-4">
        <Text className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-gray-100">
          Ejemplos de Tarjetas
        </Text>

        <PrimaryCard
          title="Tarjeta Primaria"
          subtitle="Esta es una tarjeta primaria con un icono."
          icon={
            <Ionicons name="information-circle" size={24} className="text-red dark:text-blue-50" />
          }
          onPress={() => console.log('Primary Card Pressed')}>
          <Text className="text-blue-500 dark:text-blue-100">
            Contenido adicional para la tarjeta primaria. Puede ser cualquier componente React.
          </Text>
        </PrimaryCard>

        <SecondaryCard title="Tarjeta Secundaria" className="mt-4">
          <Text className="text-gray-700 dark:text-gray-300">
            Esta tarjeta usa los estilos secundarios. Es más sutil.
          </Text>
          <View className="mt-2 rounded bg-gray-200 p-2 dark:bg-gray-700">
            <Text className="text-xs text-gray-600 dark:text-gray-400">Componente anidado</Text>
          </View>
        </SecondaryCard>

        <OutlinedCard
          title="Tarjeta Delineada"
          subtitle="Solo con bordes."
          icon={
            <Ionicons
              name="checkbox-outline"
              size={24}
              className="text-gray-700 dark:text-gray-300"
            />
          }
          className="mt-4">
          <Text className="text-gray-700 dark:text-gray-300">
            Perfecta para acciones menos prominentes.
          </Text>
        </OutlinedCard>

        <ElevatedCard
          title="Tarjeta Elevada"
          subtitle="Con una sombra pronunciada."
          className="mt-4"
          footerComponent={
            <View className="flex-row justify-end">
              <Text className="font-semibold text-blue-600 dark:text-blue-400">Ver más</Text>
            </View>
          }>
          <Text className="text-gray-800 dark:text-gray-200">
            Ideal para destacar información importante. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Text>
        </ElevatedCard>

        <InfoCard
          title="Información"
          icon={
            <Ionicons name="bulb-outline" size={24} className="text-sky-700 dark:text-sky-100" />
          }
          className="mt-4">
          <Text className="text-sky-700 dark:text-sky-200">
            Un mensaje informativo para el usuario.
          </Text>
        </InfoCard>

        <SuccessCard
          title="Éxito"
          subtitle="Operación completada."
          icon={
            <Ionicons
              name="checkmark-circle-outline"
              size={24}
              className="text-green-700 dark:text-green-100"
            />
          }
          className="mt-4">
          <Text className="text-green-700 dark:text-green-200">¡Todo salió genial!</Text>
        </SuccessCard>

        <WarningCard
          title="Advertencia"
          icon={
            <Ionicons
              name="warning-outline"
              size={24}
              className="text-yellow-700 dark:text-yellow-100"
            />
          }
          className="mt-4">
          <Text className="text-yellow-700 dark:text-yellow-200">Ten cuidado con esta acción.</Text>
        </WarningCard>

        <DangerCard
          title="Peligro"
          subtitle="Acción crítica"
          icon={
            <Ionicons name="skull-outline" size={24} className="text-red-700 dark:text-red-100" />
          }
          className="mt-4"
          onPress={() => console.log('Danger Card Pressed!')}>
          <Text className="text-red-700 dark:text-red-200">
            Esto podría tener consecuencias irreversibles.
          </Text>
        </DangerCard>

        <ElevatedCard
          className="mb-8 mt-4" // Añadido mb-8 para espacio al final del scroll
          headerComponent={
            <View className="rounded-t-lg bg-purple-600 p-4">
              {' '}
              {/* Asegurar que el redondeo coincida si es necesario */}
              <Text className="text-red text-xl font-bold">Cabecera Personalizada</Text>
            </View>
          }>
          <Text className="text-gray-800 dark:text-gray-200">
            Esta tarjeta tiene una cabecera completamente personalizada y sin padding por defecto en
            el contenido.
          </Text>
        </ElevatedCard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
