const buildFieldList = (resourceName) => {
	switch(resourceName) {
		case 'User':
			return userFields;
		case 'Code':
			return codeFields;
		case 'ChatChannel':
			return chatChannelFields;
		case 'ChatChannelUser':
			return chatChannelUserFields;
		case 'Message':
			return messageFields;
		case 'Relation':
			return relationFields;
		default:
			console.log("Error");
  }
}

const userFields = [
  "created_at",// DateTime!
  "updated_at",// DateTime!
  "id",// Int!
  "name",// String!
  "email",// String
  "profile_image",// String
  "profile_image_thumb",// String
  "profile_image_medium",// String
  "description",// String
  // "authority",// Code!
  "authorityId",// String!
  // "chatChannelUsers",// [ChatChannelUser!]!
  // "messages",// [Message!]!
]

const codeFields = [
  "group", //String!
  "id", // String!
  "label_korean",// String
  "label_english",// String
  "created_at",// DateTime!
  "updated_at",// DateTime!
]

const messageFields = [
  "id",// Int!
  "created_at",// DateTime!
  "updated_at",// DateTime!
  "userId",// Int!
  "chatChannelId",// Int!
  "textMessage",// String!
  // "user",// User!
]

const chatChannelFields = [
  "created_at",// DateTime!
  "updated_at",// DateTime!
  "id",// Int!
  "name",// String!
  "password",// String
  "type",// Code!
  "typeId",// String!
  "chatChannelUsers",// [ChatChannelUser]!
  "messages",// [Message]!
]

const chatChannelUserFields = [
  "created_at",// DateTime!
  "updated_at",// DateTime!
  "id",// Int!
  "userId",// Int!
  "chatChannelId",// Int!
  "roleId",// String!
  "role",// Code!
]

const relationFields = [
  "created_at",// DateTime!
  "updated_at",// DateTime!
  "user_first_id",// Int!
  "user_second_id",// Int!
  "type",// Code!
  "typeId",// String!
]

export default buildFieldList;