import buildFieldList from './buildFieldList';
import {gql} from '@apollo/client'


const buildQuery = introspectionResults => (raFetchType, resourceName, params) => {
    const resource = introspectionResults.resources.find(r => r.type.name === resourceName);

		console.log("인트로스팩션리절트: ", introspectionResults)
		console.log("리소스 네임: ", resourceName);
		// console.log("리소스: ", resource);
		console.log("변수: ", params);
		console.log("라패치타입: ", raFetchType);
    switch (raFetchType) {
        case 'GET_ONE': {
					if( resourceName === 'Code' ){
						return;}
					// id를 number 쓰는 경우,
					else {
						params.id = Number(params.id);
            return {
              query: gql`query Get${resourceName}ById($id: Int!) {
								data: get${resourceName}ById(id: $id) {
									${buildFieldList(resourceName)}
								}
							}`,
                variables: params, // params = { id: ... }
                parseResponse: response => response.data,
							}
						}
					}
					// ... other types handled here
					case 'GET_LIST':
						return {
							query: gql`query Get${resourceName}s {
								data: get${resourceName}s {
									${buildFieldList(resourceName)}
								}
						}`,
								variables: params, // params = { id: ... }
								parseResponse: (response) => {
									console.log(response);
									return { data: response.data.data, total: response.data.data.length }
								}
					}
					case 'GET_MANY': {
						if( resourceName === 'Code' )
							params.ids = params.ids.map(id => `"${id}"`);
						return {

							query: gql`query Get${resourceName}sByIds {
								data: get${resourceName}sByIds(ids: [${params.ids.join(',')}]) {
									${buildFieldList(resourceName)}
								}
							}`,
								variables: params, // params = { id: ... }
								parseResponse: (response) => {
									console.log(response);
									return { data: response.data.data, total: response.data.data.length }
								}
						}
					}
					case 'UPDATE': {
						if (resourceName === 'User') {
							console.log("업데이트 유저");
							const variable = {id: Number(params.id), authorityId: params.data.authorityId};
							return {
								query: gql`mutation UpdateUserAuthority($id: Int!, $authorityId: String!) {
									data: updateUserAuthority(id: $id, authorityId: $authorityId) {
										${buildFieldList(resourceName)}
									}
								}`,
								variables: variable,
								parseResponse: response => response.data,
							};
						}
					}

				default:
					console.log("Error");
	}
}

export default buildQuery;