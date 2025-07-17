// app/join.tsx

import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import mainstyle from '@/styles/_mainstyle'
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants'

export default function Join() {
  const router = useRouter()

  return (
    <View style={mainstyle.container}>
      <View style={{ alignItems: 'center', marginTop: 80 }}>
        <Image source={HEROLOGOGREEN} style={mainstyle.heroLogo} />
        <Text style={mainstyle.titleText}>Create your account</Text>
      </View>

      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#999"
          style={{
            width: '80%',
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            marginBottom: 20,
          }}
        />

        <TextInput
          placeholder="Email address"
          placeholderTextColor="#999"
          style={{
            width: '80%',
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            marginBottom: 20,
          }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={{
            width: '80%',
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            marginBottom: 20,
          }}
        />

        <TouchableOpacity style={mainstyle.button}>
          <Text style={mainstyle.buttonText}>Join Now</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/signin')}>
          <Text style={{ color: '#4CAF50', marginTop: 20 }}>
            Already have an account? Sign in
          </Text>
        </TouchableOpacity>

        <View style={mainstyle.socialButtonsContainer}>
          <TouchableOpacity style={mainstyle.socialButton}>
            <Image source={GOOGLELOGO} style={mainstyle.socialLogo} />
          </TouchableOpacity>
          <TouchableOpacity style={mainstyle.socialButton}>
            <Image source={FACEBOOKLOGO} style={mainstyle.socialLogo} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
