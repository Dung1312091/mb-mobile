import React, { memo } from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import useForm from "react-hook-form";
import * as yup from "yup";
// import { Button } from "react-native-elements";
import Input from "../../components/input";
import Button from "../../components/button";
const SignupSchema = yup.object({
  cc: yup.string("Enter your CC Number").required("CC Number is required"),
  password: yup
    .string("")
    .required("Password is required")
    .min(6, "Password must contain atleast 6 characters")
});
const LoginForm = memo(props => {
  const { navigate } = props;
  const { register, setValue, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema
  });
  const onSubmit = data => {
    console.log("Form Data", data);
    navigate("Dashboard");
  };
  return (
    <View
      style={{
        alignItems: "center"
      }}
    >
      <View style={{ marginTop: 80, marginBottom: 30 }}>
        <Image source={require("../../assets/mb_logo.png")} />
      </View>

      <Input
        ref={register({
          name: "cc"
        })}
        ref={register(
          {
            name: "cc"
          },
          {
            required: true
          }
        )}
        onChangeText={text => setValue("cc", text, true)}
        placeholder="Số CC đại lý"
        errorMessage={errors.cc && errors.cc.message}
        leftIcon={<Icon name="user" size={16} color="#0C376C" />}
      />
      <Input
        secureTextEntry={true}
        placeholder="Mật khẩu"
        ref={register(
          {
            name: "password"
          },
          {
            required: true
          }
        )}
        onChangeText={text => setValue("password", text, true)}
        errorMessage={errors.password && errors.password.message}
        leftIcon={<Icon name="lock" size={16} color="#0C376C" />}
      />

      <Button title="Đăng nhập" onPress={handleSubmit(onSubmit)} />
    </View>
  );
});

export default LoginForm;
